// async function listItem() {
//   const response = await fetch("");
//   const item = await response.json();
//   console.log(item);

//   let items = document.querySelector(".listItem");
//   item.map((list) => {
//     listItem.innerHTML += `
//     <li>
//                 <a class="home" href="">Home</a>
//                 <i class="fa-solid fa-angle-down"></i>

//                 <ul>
//                   <li class="homepages">
//                     <a href="">HomePage 01</a>
//                   </li>
//                   <li class="homepages">
//                     <a href="">HomePage 02</a>
//                   </li>
//                   <li class="homepages">
//                     <a href="">HomePage 03</a>
//                   </li>
//                   <li class="homepages">
//                     <a href="">HomePage 04</a>
//                   </li>
//                   <li class="homepages">
//                     <a href="">HomePage 05</a>
//                   </li>
//                   <li class="homepages">
//                     <a href="">HomePage 06</a>
//                   </li>
//                 </ul>
//               </li>
//     `;
//   });
// }

async function cardsApi() {
  const response = await fetch("http://localhost:3000/cards");
  const card = await response.json();
  console.log(card);

  let cities = document.querySelector(".cities-down");
  card.map((city) => {
    cities.innerHTML += `
    <div class="city-card">
            <div class="card-left">
              <img class="card-img" src="${city.img}" alt="" />
            </div>
            <div class="card-right">
              <h3>${city.cityName}</h3>
              <p>${city.properties}</p>
              <span>${city.button}</span>
            </div>
          </div>
    `;
  });
}
cardsApi();

async function villasApi() {
  const response = await fetch("http://localhost:3000/villasCard");
  const data = await response.json();
  console.log(data);
}

let villasCard = document.querySelector(".villas");
data.map((sale) => {
  villasCard.innerHTML += `
  
        <div class="villasCard">
          <div class="villasCardUp">
            <img
              src="${sale.img}"
              alt=""
            />

          </div>
          <div class="villasCardMiddle">
            <h3>${sale.villasName}</h3>
            <p>${sale.address}</p>
            <div>
              <ul>
                <li>
                  <i class="fa-solid fa-bed"></i>
                  <span>${sale.bedRoom}</span>
                </li>
                <li>
                  <i class="fa-solid fa-sink"></i>
                  <span>${sale.bathRoom}</span>
                </li>
                <li>
                  <span>${sale.villaskv}</span>
                </li>
              </ul>
            </div>
            <hr />
          </div>

          <div class="villasCardDown">
            <div>
              <div>
                <img
                  src="${sale.salePersonImg}"
                  alt=""
                />
              </div>
              <div>
                <span>${sale.personName}</span>
              </div>
            </div>
            <div>
              <h3>${sale.price}</h3>
            </div>
          </div>
    `;
});

villasApi();

//   const response = await fetch("http://localhost:8080/villasCard");

// async function villasApi() {
//   const response = await fetch("http://localhost:8080/villasCard");
//   const villaCard = await response.json();
//   console.log(villaCard);

//   let villas = document.querySelector(".villasCard");
//   villaCard.map((sale) => {
//     villas.innerHTML += `

//         <div class="villasCard">
//           <div class="villasCardUp">
//             <img
//               src="${sale.img}"
//               alt=""
//             />

//           </div>
//           <div class="villasCardMiddle">
//             <h3>${sale.villasName}</h3>
//             <p>${sale.address}</p>
//             <div>
//               <ul>
//                 <li>
//                   <i class="fa-solid fa-bed"></i>
//                   <span>${sale.bedRoom}</span>
//                 </li>
//                 <li>
//                   <i class="fa-solid fa-sink"></i>
//                   <span>${sale.bathRoom}</span>
//                 </li>
//                 <li>
//                   <span>${sale.villaskv}</span>
//                 </li>
//               </ul>
//             </div>
//             <hr />
//           </div>

//           <div class="villasCardDown">
//             <div>
//               <div>
//                 <img
//                   src="${sale.salePersonImg}"
//                   alt=""
//                 />
//               </div>
//               <div>
//                 <span>${sale.personName}</span>
//               </div>
//             </div>
//             <div>
//               <h3>${sale.price}</h3>
//             </div>
//           </div>
//     `;
//   });
// }
// villasApi();
