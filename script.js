const WEBHOOK_URL = "https://discord.com/api/webhooks/1469352643775299605/xAgN1iYUIwA-mZY8WQc-kkbGsHt_0jq9oyinDX6H5f-Z4dlK3VMZtr1C40kyPsll8REv";

function send() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: name || "Webサイト",
      content: message
    })
  })
  .then(() => alert("送信しました！"))
  .catch(() => alert("エラー"));
}
