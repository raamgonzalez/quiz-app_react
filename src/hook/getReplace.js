export default function useReplace(htmlStr) {
	htmlStr = htmlStr.replace(/&lt;/g , "<");	 
	htmlStr = htmlStr.replace(/&gt;/g , ">");     
	htmlStr = htmlStr.replace(/&quot;/g , "\"");  
	htmlStr = htmlStr.replace(/&#039;/g , "'");   
	htmlStr = htmlStr.replace(/&amp;/g , "&");
	htmlStr = htmlStr.replace(/&uuml;/g , "ü");
	htmlStr = htmlStr.replace(/&ldquo;/g , '“');
	htmlStr = htmlStr.replace(/&ldquo;/g , "'");
	htmlStr = htmlStr.replace(/&iuml;/g , 'Ï');
	htmlStr = htmlStr.replace(/&rdquo;/g , '”');
	return htmlStr;     
}