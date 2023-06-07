export default function useReplace(htmlStr) {
	htmlStr = htmlStr.replace(/&lt;/g , "<");	 
	htmlStr = htmlStr.replace(/&gt;/g , ">");     
	htmlStr = htmlStr.replace(/&quot;/g , "\"");  
	htmlStr = htmlStr.replace(/&#039;/g , "'");   
	htmlStr = htmlStr.replace(/&amp;/g , "&");
	htmlStr = htmlStr.replace(/&uuml;/g , "ü");
	htmlStr = htmlStr.replace(/&ldquo;/g , "'");
	htmlStr = htmlStr.replace(/&ldquo;/g , "'");
	htmlStr = htmlStr.replace(/&iuml;/g , 'Ï');
	htmlStr = htmlStr.replace(/&rdquo;/g , "'");
	htmlStr = htmlStr.replace(/&ldquo;/g , "'");
	htmlStr = htmlStr.replace(/&Eacute;/g , 'É');
	htmlStr = htmlStr.replace(/&Ntilde;/g , 'Ñ');
	htmlStr = htmlStr.replace(/&ntilde;/g , 'ñ');
	htmlStr = htmlStr.replace(/&aacute;/g , 'á');
	
	return htmlStr;     
}