let posts=[{
  name:"ali",
  text:"whatever"},
  {
    name:"sara",
    text:"grandma"
  }];

let i=0;

  const render=function()
  {
      while(i < posts.length)
      {
        $("body").append(`<div class=post><p>${posts[i].name}: ${posts[i].text}</p>  </div>`);
        i++;
      }
  }

const createpost=function(name,txt)
{
  posts.push({name:name,text:txt});
}

const deleteme=function()
{
  
  let pos=0;
  for(let j=0;j<posts.length;j++)
  {

    if(posts[j].name+": "+posts[j].text==$(this).text())
    {
      pos=j;
      break;
    }
  }
    
  posts.splice(pos-1,1);
  i--;
  $(this).remove();
  render();
}

$("#sub").click(function(){
const name = $("#name").val();
$("#name").val("");
const txt = $("#txt").val();
 $("#txt").val("");
createpost(name,txt);
});

$("#rn").click(function(){
  render();
})

$("body").on("click",".post",deleteme);

