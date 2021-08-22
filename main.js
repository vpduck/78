var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names=["Family Book","Ram","Anand","Aviraj","Navya","Vandana"];

var i=0;

function update()
{
    i++;
    var number_of_family_member=5;
if(i>number_of_family_member)
{
    i=0;
}
var updated_image=images[i];
var updated_name=names[i];
document.getElementById("family_member_image").src=updated_image;
document.getElementById("family_member_name").innerHTML=updated_name;
}
