import { SITE } from "@/lib/site";

export type KitchenMail = {
  subject: string;
  fields: Record<string, string>;
};

export type KitchenMailResult = {
  ok: boolean;
  needsActivation: boolean;
  error?: string;
};

const ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(SITE.email)}`;

export async function notifyKitchen(mail: KitchenMail): Promise<KitchenMailResult> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        _subject: mail.subject,
        _template: "table",
        _captcha: "false",
        _honey: "",
        ...mail.fields,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean | string;
      message?: string;
    };
    const message = String(data.message ?? "");
    const needsActivation = /activat|confirm your email|check your email/i.test(message);
    const success = data.success === true || data.success === "true" || res.ok;

    if (!success && !needsActivation) {
      return { ok: false, needsActivation: false, error: message || "Could not email the kitchen." };
    }

    return { ok: true, needsActivation };
  } catch {
    return {
      ok: false,
      needsActivation: false,
      error: "Could not reach the kitchen inbox. Call or try again.",
    };
  } finally {
    window.clearTimeout(timer);
  }
}
