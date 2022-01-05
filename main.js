var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg"," https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fcartoon-grandfather-cliparts.html&psig=AOvVaw1Kr0Wg27CcPlPXVcA4dE1b&ust=1641511587458000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIj4mqzhm_UCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FxTwJmw_clip-art-transparent-cartoon-png-for-boy-body%2F&psig=AOvVaw33qfy_pvlE3GVcokh7yO5D&ust=1641511704371000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjY4ebhm_UCFQAAAAAdAAAAABAD" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.colourbox.com%2Fvector%2Fvector-cartoon-boy-stands-thoughtfully-isolated-vector-28554163&psig=AOvVaw1I2uyTJIWk8uKUS1ioJOl4&ust=1641511820882000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLC5gqTim_UCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F402861129161568978%2F&psig=AOvVaw1gli0cekofPrmeivhwQIRV&ust=1641511876911000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDuwbjim_UCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fbeautiful-woman-cartoon-girl-character-wearing-vector-22674592&psig=AOvVaw3efKkc4PqO_mfbdAJs0VmL&ust=1641511923666000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCsicvim_UCFQAAAAAdAAAAABAD"];
var names = ["Family Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
