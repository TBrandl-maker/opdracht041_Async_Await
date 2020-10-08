const waitForGetData = async () => {
    const data = await getData();
    console.log(data);
};

waitForGetData();
