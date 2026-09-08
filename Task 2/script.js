async function loadPhones() { 
   
  try { 
    // 1. FETCH data from db.json - returns a Promise 
    const response = await fetch('db.json');  
     
    // 2. AWAIT until data comes, then convert to JSON 
    const data = await response.json(); 
 
    const listDiv = document.getElementById('phoneList'); 
    listDiv.innerHTML = '';  
 
    // 3. Loop and create card for each phone 
    data.phones.forEach(phone => { 
      listDiv.innerHTML += ` 
        <div style="border:1px solid #ccc; border-radius:10px; padding:15px; margin:15px; 
width:250px; display:inline-block; box-shadow:0 2px 5px rgba(0,0,0,0.1);"> 
          <img src="${phone.image}" alt="${phone.name}" style="width:100%; height:200px; 
object-fit:contain;"> 
          <h3>${phone.name}</h3> 
          <p><b>Color:</b> ${phone.color}</p> 
          <p><b>Storage:</b> ${phone.storage}</p> 
          <p><b>Price:</b> ₹${phone.price}</p> 
          <button>Buy Now</button> 
        </div> 
      `; 
    }); 
 
  } catch (error) { 
    console.log("Error:", error); 
    alert("Could not load phones. Check if db.json and images are correct"); 
  } 
} 