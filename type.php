<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>test</title>
</head>
    <body>

<script>

var mess = "現在はアフィサイトとして入ってでもたます。";
var  Cnt = 0;

function type(){
	 document.myForm.myFormMes.value = mess.substring(0 , Cnt) + "_";
	 Cnt = (Cnt == mess.length) ?0: Cnt+1;
}

</script>
    <form name = "myForm">
    <textarea name="myFormMes">
    </textarea>


    </form>

<script>
document.write(mess.length);
setInterval("type()",200);
</script>


    </body>
</html>
