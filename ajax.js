function getUsers(params) {
  try{
      const { url, method = "GET" } = params;
    return $.ajax({
      url:url,
      method,
    });
  }
  catch(error){
      console.log(error.message)
      
  }
}
