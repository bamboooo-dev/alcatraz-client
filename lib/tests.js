export async function getTestData(){
  const message = await fetch('http://api:8000/api/v1/tests')
    .then(res => res.json())
    .then(data => {
      return data.message
    });
  return message;
}
