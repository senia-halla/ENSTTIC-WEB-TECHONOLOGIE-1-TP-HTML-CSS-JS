function conjVerb(){
  const ending = ["e", "es", "e", "ons", "ez", "ent"];
  const pronoun = ["je ", "tu ", "il/elle ", "nous ", "vous ", "ils/elles "];
  const div = document.getElementsByTagName('div')[0];
  const verb = (document.getElementById("verb").value).trim(); // trim spprime les espaces

  console.log(verb);
  if(verb != ''){
    rootVerb = verb.substring(0, verb.length - 2);
    termVerb = verb.substring(verb.length - 2, verb.length);
    if(termVerb == "er"){
      var output = "<table>";
      for(let i=0; i < 6;i++)
          output += "<tr><td>"+pronoun[i]+rootVerb+ending[i]+"</td></tr>\n";
      output += "</table>";
      div.innerHTML = output;
    } else
      div.innerHTML = "Ce verbe n'est pas un verbe du premier groupe";
  }
}
const bt =document.getElementById('bt');
bt.addEventListener('click', conjVerb);
