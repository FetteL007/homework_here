function Ticket(){
    
    
	let sum = 0;
    let a = 0;
    let b = 0;
    let x = Number(prompt("Введите шестизначное число: "));
    
	for (i = 0; x; i++){
		sum = Math.floor(x % 10);
		if (i < 3)
		{
			a += sum;
		}
		else
		{
			b += sum;
        }
        Math.floor(x /= 10);
        
    }

    if (a == b)

    console.log('У вас счастливый билет');
	else
	console.log('У вас не счастливый билет');

}