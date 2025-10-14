import { useState, useEffect } from "react";

//useFetch custom hook can be used in any component based on the url send as an argument to get custom data based on the component

export const useFetch = (url) => { //url is getting as an argument
    const [courseData, setCourseData] = useState(null);

    const [dummy, setDummy] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            console.log("use effect run");
            console.log(dummy);
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error("couldn't retrive data")  //custom error handling
                    }
                    // console.log(response.json());
                    return response.json();

                }).then((data) => {
                    setCourseData(data)
                    console.log(data)
                })
                .catch((err) => {
                    // console.log(err.message);
                    setError(err.message);
                });
        }, 1000);

        // .then((data)=>{
        //     console.log(data);
        // });

    }, []);
    return [courseData, dummy, error]
};