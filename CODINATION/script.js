function handleClick(){
	const contactsection = document.getElementById('contect');
	if(contactsection){
		contactsection.scrollIntoView({behavior: 'smooth'});
	}
}

document.getElementById('contactform').addEventListener('submit',function(event){
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const message = document.getElementById('message').value;

   //create a data object
	const data ={
		name : name,
		email : email,
		message : message
	};
	//send data to a mock api
	fetch('https://jsonplaceholder.typicode.com/posts',{
		method: 'POST',
		headers:{
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	.then(response => response.json())
	.then(data =>{
		console.log('success:',data);
		alert('Thank you for your message!,we will get back to you soon.');
	})
	.catch((error) =>{
		console.error('Error:',error);
		alert('there was an error sending your message.please try again later.')
	});
});

