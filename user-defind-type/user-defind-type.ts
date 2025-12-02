let userID: string | number | boolean;

userID = "100";
userID = 100;
userID = true;


function displayUserInfo(userID: string | number){
    console.log(userID)
}
displayUserInfo("100");
displayUserInfo(100);