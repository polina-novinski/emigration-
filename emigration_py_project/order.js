function sort(){
    let price=document.getElementById("price")
    let title=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

function search(){

    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce()}

    if(title.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}



async function getResponce() {

    let responce = await fetch("books.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    console.log(content)
    let key

    content_price=content.sort((a, b) => a.price - b.price);

   content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();

    content_filter= content_price.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.author.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")

    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 20rem" class="card">
                <img class="image" src=${content_filter[key].img}>
                <h5 class="card-header">${content_filter[key].title}</h5>
                <h6 class="card-subtitle">${content_filter[key].author}</h5>
                <p class="card-text"> Цена: ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text1" > Заказать <input class="w-25" type="number" value="0" name="check"></p>
                </li>
                        `
            }

}
async function getResponce1() {

    let responce = await fetch("books.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    console.log(content)
    let key

    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });


    content_filter=[]
    let word=document.getElementById('search').value.toLowerCase();

    content_filter= content_title.filter((product) =>{
        return (
                    product.title.toLowerCase().includes(word) ||
                    product.author.toLowerCase().includes(word) ||
                    product.price.toString().includes(word)
                );

    });
    console.log(content_filter);

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_filter) {
                node_for_insert.innerHTML += `
                <li style="width: 20rem" class="card">
                <img class="image" src=${content_filter[key].img}>
                <h5 class="card-header">${content_filter[key].title}</h5>
                <h6 class="card-subtitle">${content_filter[key].author}</h5>
                <p class="card-text"> Цена: ${content_filter[key].price} р.</p>
                <input type="hidden" name= "vendor_code" value=${content_filter[key].vendor_code}>
                <p class="card-text1" > Заказать <input class="w-25" type="number" value="0" name="check"></p>
                </li>
                        `
            }

}

sort()
