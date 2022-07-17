
function hesabla()
{
    var mebleg=document.getElementById("Summ").value.trim();
    var faiz=document.getElementById("procent").value.trim();
    var meblegText=document.getElementById("umumi");
    var odenisText=document.getElementById("odenis");
    var text=document.getElementById("NaN");

    var meblegNumber=Number(mebleg);
    var faizNumber=(mebleg*Number(faiz))/100;
    var ayNumber=Number(document.getElementById("ay").value);
    var umumi_mebleg=meblegNumber+faizNumber*(ayNumber/12);
    var odenis=umumi_mebleg/ayNumber; 

    if(umumi_mebleg.toString()=='NaN' || odenis.toString()=='NaN')
    {        
        text.innerHTML="Dəyərləri düzgün seçin";
        text.style.color='red';
        meblegText.innerHTML="";
        odenisText.innerHTML="";
    }
    else
    {
        text.innerHTML="";
        meblegText.innerHTML="Ümumi Məbləğ: "+Math.round(umumi_mebleg)+" azn";
        odenisText.innerHTML="Aylıq ödəniş "+Math.round(odenis)+" azn";
    }
    
    

}

