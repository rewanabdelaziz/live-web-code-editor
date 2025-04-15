document.addEventListener("DOMContentLoaded", ()=>{

    if(window.localStorage.getItem("HTMLCode") && window.localStorage.getItem("CSSCode") && window.localStorage.getItem("JSCode")){

        document.getElementById("htmlCode").value=window.localStorage.getItem("HTMLCode");
        document.getElementById("cssCode").value=window.localStorage.getItem("CSSCode");
        document.getElementById("jsCode").value=window.localStorage.getItem("JSCode");
    }else{
        document.getElementById("htmlCode").value="<div>\n\n</div>";
        document.getElementById("cssCode").value="<style>\n\n</style>";
        document.getElementById("jsCode").value="<script>\n\n</script>";
    }
    // console.log(window.localStorage.getItem("HTMLCode"))
    // console.log(window.localStorage.getItem("CSSCode"))
    // console.log(window.localStorage.getItem("JSCode"))
});


function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
    window.localStorage.setItem("HTMLCode",htmlCode);
    window.localStorage.setItem("CSSCode",cssCode);
    window.localStorage.setItem("JSCode",jsCode);
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
