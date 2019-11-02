//读取xml字符串
// {
//     try
//     {
//         xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//         xmlDoc.async = "false";
//         xmlDoc.loadXML(text);
//     }
//     catch(e)
//     {
//         try
//         {
//             parser = new DOMParser();
//             xmlDoc = parser.parseFromString(text,"text/xml");   
//         }
//         catch(e)
//         {
//             alert(e.message);
//         }
//     }
//     console.log(text);
//     document.write("xmlDoc is loaded, ready for use");
// }

//读取xml文件
function loadXMLDoc(dname) 
{
    try //Internet Explorer
    {
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
    }
    catch(e)
    {
    try //Firefox, Mozilla, Opera, etc.
    {
        xmlDoc=document.implementation.createDocument("","",null);
    }
    catch(e) {alert(e.message)}
    }
    try 
    {
    xmlDoc.async=false;
    xmlDoc.load(dname);
    return(xmlDoc);
    }
    catch(e) {alert(e.message)}
    return(null);
    }
