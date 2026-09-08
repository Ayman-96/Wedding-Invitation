export function formatDateToNow(createdAt, lang) {
  const now = new Date();
  const date = new Date(createdAt);
  const seconds = Math.floor((now - date) / 1000);

  const intervals = [
    { label: lang === "ku" ? "ساڵ" : "year", secs: 31536000 },
    { label: lang === "ku" ? "مانگ" : "month", secs: 2592000 },
    { label: lang === "ku" ? "هەفتە" : "week", secs: 604800 },
    { label: lang === "ku" ? "ڕۆژ" : "day", secs: 86400 },
    { label: lang === "ku" ? "کاتژمێر" : "hour", secs: 3600 },
    { label: lang === "ku" ? "خولەک" : "minute", secs: 60 },
  ];

  for (const { label, secs } of intervals) {
    const count = Math.floor(seconds / secs);
    if (count >= 1) {
      return `${count} ${label}${count > 1 && lang === "en" ? "s ago" : " لەمەوبەر"} `;
    }
  }

  return lang === "ku" ? "" : "just now";
}
