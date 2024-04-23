
// // Creates variable to reference wrapper and section IDs
// const wrapperEle = document.getElementById('wrapper');
// const sectionEle = document.getElementById('text');

// // STYLING to elements
// wrapperEle.style.height="80vh";
//     wrapperEle.style.background="gold";
//     wrapperEle.style.textAlign="center";
//     wrapperEle.style.border="2px solid black";
//     wrapperEle.style.display="flex";
//     wrapperEle.style.justifyContent="center";

// sectionEle.style.height="150px";
//     sectionEle.style.width="80%";
//     sectionEle.style.background="lightblue";


// // STATIC TEXT in header box
// sectionEle.innerHTML="<h1>Freelancer Forum</h1><p>The average starting price is [   ]</p><h1>Available Freelancers:</h1>";



// Initial array object for freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", StartingPrice: 30 },
    { name: "Bob", occupation: "Teacher", StartingPrice: 50 },
    { name: "Carol", occupation: "Programmer", StartingPrice: 70 },
  ];

// need to now create a box and three boxes within to hold the data

    // Create div containers
    const contentContainer = document.createElement("div");
        contentContainer.classList.add("container")
    const nameContainer = document.createElement("div");
        nameContainer.classList.add("name");
    const occuContainer = document.createElement("div");
        occuContainer.classList.add("occupation")
    const priceContainer = document.createElement("div");
        priceContainer.classList.add("price")
    
    // appending divs within contentContainer
    contentContainer.appendChild(nameContainer);
    contentContainer.appendChild(occuContainer);
    contentContainer.appendChild(priceContainer);
    document.body.appendChild(contentContainer);


freelancers.forEach((i)=>{

    document.querySelector(".name").innerHTML = i.name;
    document.querySelector(".occupation").innerHTML = i.occupation;
    document.querySelector(".price").innerHTML = i.StartingPrice;

}) 


// CAN'T FIGURE OUT HOW TO OUTPUT TEXT + DYNAMIC VALUE TO AN EXISTING DYNAMIC ELEMENT (EX. DIV CLASS NAME ABOVE)
// FOREACH IS ALSO ONLY OUTPUTTING FINAL VALUE IN OBJECT ARRAY



// const ele = document.createElement("div");
// ele.classList.add("box")
// ele.innerHTML="<h1>Name</h1>";
// document.body.appendChild(ele);

// freelancers.forEach((i)=>{
//     // Create a div and H1 for each
//     // const paragraphEle = document.createElement("p");
//     // const headerEle = document.createElement("h1");

//     nameContainer.innerHTML=i.name;

//     // inserting into HTML
//     ele.appendChild(paragraphEle);

// })
