// This function is ASYNC = "I will take some time" 
async function loadPhones() { 
   
  try { 
    // 1. FETCH = Send waiter to get db.json 
    // This returns a PROMISE = "I promise to bring data later" 
    const response = await fetch('db.json');  
     
    // 2. AWAIT = Wait here until waiter comes back with response 
    // Convert response to JSON 
    const data = await response.json(); 
 
    // 3. Show data on screen 
    const listDiv = document.getElementById('phoneList'); 
    listDiv.innerHTML = ''; // clear old data 
 
    data.phones.forEach(phone => { 
      listDiv.innerHTML += ` 
        <div style="border:1px solid black; padding:10px; margin:10px;"> 
          <h3>${phone.name}</h3> 
          <p>Color: ${phone.color}</p> 
          <p>Storage: ${phone.storage}</p> 
          <p>Price: ₹${phone.price}</p> 
        </div> 
      `; 
    }); 
 
  } catch (error) { 
    // If Promise fails = "Sorry menu not available" 
    console.log("Error:", error); 
    alert("Could not load phones"); 
  } 
} 