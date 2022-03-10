
      const add = (a = 5, b = 6) => {
            console.log(a, b);
        };
        console.log(add());
 




        const userFriends = (username, ...Hello) => {
            console.log(Hello);
            console.log(username);
            for (let i in Hello) {
                console.log("List of friends Himanshu have:" + Hello[i]);
            }
        };
        let username = "userName is:Himanshu";
        userFriends(username, "Chris", "Scarlet", "RDJ", "Hemsworth");

        





        const printCapitalNames = () => {
            for (let i in Names) {
                console.log("Lowercase words are:" + Names[i]);
                let a = Names[i].toLocaleUpperCase();
                console.log("Uppercase words are:" + a);
            }
        };
        let Names = ['Himanshu', 'chris', 'Scarlet', 'Rdj', 'Hemsworth'];
        printCapitalNames(...Names);
