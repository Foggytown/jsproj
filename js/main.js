const Num_goods=6;

const DATABASE=[{id: "123", name:"fisrt_thing", price:40},
{id: "124", name:"second_thing", price:66},
{id: "125", name:"third_thing", price:88},
{id: "126", name:"forth_thing", price:40},
{id: "127", name:"fifth_thing", price:33},
{id: "128", name:"sixth_thing", price:40}]
let arbuttons=[];



let cartnum=document.querySelector(`.total_quantity`);
let cartsum=document.querySelector(`.total_sum`);

for (let i=0; i<Num_goods; i++)
{
  arbuttons.push(document.querySelector(`.button${i+1}`));
}



for (let i=0; i<Num_goods; i++)
{
  arbuttons[i].onclick=async function()
  {
    cartnum.textContent=parseInt(cartnum.textContent)+1;
    let item=undefined;
    let getFromDf=new Promise((resolve, reject)=>
    setTimeout(resolve(DATABASE[i]), 2000)).then(
      function(result) {item=result; },
      function(result) {throw result;});
    cartsum.textContent=await parseInt(cartsum.textContent)+item['price'];
  };
}
