const calculateDemeritPoints = (speed) => {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
        return;
      }

      const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
      
      console.log(`Points: ${demeritPoints}`);

      if (demeritPoints > 12) {
        console.log("License suspended");
      }
    };