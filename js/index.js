flsestrings["wJpGijhQgX"]={
    "default": "<p>You're currently using an early-access version of Stella.</p>",
    "ja": "<p>現在、早期アクセスバージョンのStellaを使用しています。</p>",
    "zh": "<p>您当前正在使用Stella的抢先体验版本。</p>",
}
flsestrings["UTQ1eptGx9"]={
    "default": "<p>Connect your Stella ID account to get Pickup activity from other devices.</p>",
    "ja": "<p>Stella IDアカウントを接続して、他のデバイスからピックアップアクティビティを取得します。</p>",
    "zh": "<p>您如何享受斯特拉？</p>"
}
function flseLoadcall(){
document.getElementById('BG8dt1y1iW').addEventListener("keyup",(e)=>{
        if (e.keyCode == 13){
            if (document.getElementById('BG8dt1y1iW').value != '')
            window.location = "/search?q=" + encodeURIComponent(document.getElementById('BG8dt1y1iW').value);
        }
    });
}

function openServices(){

}