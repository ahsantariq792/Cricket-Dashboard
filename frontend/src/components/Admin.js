import '../App.css';
import React, { useEffect, useState } from 'react';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
import axios from 'axios';
import { baseurl } from '../core';


function Admin() {

    const [score, setScore] = useState({
        format: "",
        runs: "",
        overs: "",
        teamA: "",
        teamB: "",
        battingteam:"",
        wicket: "",
        batsmanA: "",
        batsmanB: "",
        batsmanAruns: "",
        batsmanBruns: "",
        batsmanAballs: "",
        batsmanBballs: "",
        bowlerA: "",
        bowlerB: "",
        bowlerAruns: "",
        bowlerBruns: "",
        bowlerAover: "",
        bowlerBover: "",
        bowlerAwickets: "",
        bowlerBwickets: "",
        target: "",
        runrate: "",
    })

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/score`)
            .then(response => {
                console.log(response.data)
                setScore(response.data)
                console.log(score)
            })
            .catch(err => alert("Error in getting data"))
    }, [])


    const submit = () => {
        axios.post(`${baseurl}/api/v1/post`, score)
            .then((res) => {
                console.log("res: ", res.data);
            })
    }








    return (
        <>
            <div className="app-main">
                <div className="post-main">

                    <form id="post-form" onSubmit={submit}>
                        <h3 className="side"> Score Control Panel</h3>

                        <div className="teamcontrol">

                            <TextField
                                id="outlined-basic"
                                name="teamA"
                                label="teamA"
                                type="text"
                                className="box"
                                id="team"
                                variant="outlined"

                                value={score.teamA}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, teamA: e.target.value }
                                    })
                                }}
                            />

                            <TextField
                                id="outlined-basic"
                                name="teamB"
                                label="teamB"
                                type="text"
                                className="box"
                                id="team"

                                value={score.teamB}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, teamB: e.target.value }
                                    })
                                }}

                                variant="outlined" />


                            <TextField
                                id="outlined-basic"
                                name="battingteam"
                                label="battingteam"
                                type="text"
                                className="box"
                                id="team"

                                value={score.battingteam}
                                onChange={(e) => {
                                    setScore((prev) => {
                                        return { ...prev, battingteam: e.target.value }
                                    })
                                }}

                                variant="outlined" />

                        </div>


                        <div className="control">
                            <div className="battingcontrol">

                                <h3 className="side">Batting Side</h3>
                                <TextField
                                    id="outlined-basic"
                                    name="post"
                                    label="format"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.format}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, format: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runs"
                                    label="runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.runs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, runs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="wicket"
                                    label="wicket"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.wicket}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, wicket: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanA"
                                    label="batsmanA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanA}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanA: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAruns"
                                    label="batsmanAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanAruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanAruns: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAballs"
                                    label="batsmanAballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanAballs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanAballs: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanB"
                                    label="batsmanB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanB}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanB: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBruns"
                                    label="batsmanBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanBruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanBruns: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBballs"
                                    label="batsmanBballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.batsmanBballs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, batsmanBballs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runrate"
                                    label="runrate"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.runrate}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, runrate: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                            </div>

                            <hr />

                            <div className="bowlingcontrol">
                                <h3 className="side">Bowling Side</h3>

                                <TextField
                                    id="outlined-basic"
                                    name="overs"
                                    label="overs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.overs}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, overs: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="target"
                                    label="target"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.target}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, target: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerA"
                                    label="bowlerA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerA}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerA: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAruns"
                                    label="bowlerAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAruns: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAwickets"
                                    label="bowlerAwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAwickets}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAwickets: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAover"
                                    label="bowlerAover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerAover}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerAover: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerB"
                                    label="bowlerB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerB}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerB: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBruns"
                                    label="bowlerBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBruns}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBruns: e.target.value }
                                        })
                                    }}
                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBwickets"
                                    label="bowlerBwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBwickets}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBwickets: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBover"
                                    label="bowlerBover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={score.bowlerBover}
                                    onChange={(e) => {
                                        setScore((prev) => {
                                            return { ...prev, bowlerBover: e.target.value }
                                        })
                                    }}

                                    variant="outlined" />



                            </div>

                        </div>
                        <Button id="btn" variant="contained" color="success" type="submit">
                            Update
                        </Button>
                    </form>
                </div>
            </div>



        </>
    );
}

export default Admin;

