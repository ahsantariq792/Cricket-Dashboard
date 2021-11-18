import '../App.css';
import React, { useEffect, useState } from 'react';
// import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from "@mui/material/Button";
import { TextField } from '@mui/material';
// import Postcard from './Postcard';
import axios from 'axios';
import { baseurl } from '../core';
// import { GlobalContext } from '../../context/Context';
// import { useContext } from "react";
// import moment from 'moment';
// import io from 'socket.io-client';



const validationSchema = yup.object({
    post: yup
        .string('Enter your password')
        .min(2, 'Name should be of minimum 4 characters length')
        .required('Name is required'),

});





function Control() {

    const [posts, setPosts] = useState([])

    const submit = (values) => {

        console.log("values", values)


        axios.post(`${baseurl}/api/v1/post`,
            {
                post: values.post,
                runs: values.runs,
                overs: values.overs,
                teamA: values.teamA,
                teamB: values.teamB,
                wicket: values.wicket,
                batsmanA: values.batsmanA,
                batsmanB: values.batsmanB,
                batsmanAruns: values.batsmanAruns,
                batsmanBruns: values.batsmanBruns,
                batsmanAballs: values.batsmanAballs,
                batsmanBballs: values.batsmanBballs,
                bowlerA: values.bowlerA,
                bowlerB: values.bowlerB,
                bowlerAruns: values.bowlerAruns,
                bowlerBruns: values.bowlerBruns,
                bowlerAover: values.bowlerAover,
                bowlerBover: values.bowlerBover,
                bowlerAwickets: values.bowlerAwickets,
                bowlerBwickets: values.bowlerBwickets,
                target: values.target,
                runrate: values.runrate,
            }, {
            withCredentials: true
        })


            .then(res => {
                console.log("postdata", res.data);

            })
    }

    useEffect(() => {
        axios.get(`${baseurl}/api/v1/post`,
            {
                withCredentials: true
            })
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(err => alert("Error in getting data"))
    }, [])








    const formik = useFormik({
        validationSchema: validationSchema,
        initialValues: {
            post: '',
            runs: '',
            overs: '',
            wicket: '',
            teamA: '',
            teamB: '',
            batsmanA: '',
            batsmanB: '',
            batsmanAruns: '',
            batsmanBruns: '',
            batsmanAballs: '',
            batsmanBballs: '',
            bowlerA: '',
            bowlerB: '',
            bowlerAruns: '',
            bowlerBruns: '',
            bowlerAover: '',
            bowlerBover: '',
            bowlerAwickets: '',
            bowlerBwickets: '',
            target: '',
            runrate: '',

        },
        onSubmit: submit
    },
    );

    return (
        <>
            <div className="app-main">
                <div className="post-main">
                    <form id="post-form" onSubmit={formik.handleSubmit}>

                        <h3 className="side"> Score Control Panel</h3>

                        <div className="teamcontrol">

                            <TextField
                                id="outlined-basic"
                                name="teamA"
                                label="teamA"
                                type="text"
                                className="box"
                                id="team"

                                value={formik.values.caption}
                                onChange={formik.handleChange}


                                error={formik.touched.caption && Boolean(formik.errors.caption)}
                                helperText={formik.touched.caption && formik.errors.caption}

                                variant="outlined" />

                            <TextField
                                id="outlined-basic"
                                name="teamB"
                                label="teamB"
                                type="text"
                                className="box"
                                id="team"

                                value={formik.values.caption}
                                onChange={formik.handleChange}


                                error={formik.touched.caption && Boolean(formik.errors.caption)}
                                helperText={formik.touched.caption && formik.errors.caption}

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

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runs"
                                    label="runs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="wicket"
                                    label="wicket"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanA"
                                    label="batsmanA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAruns"
                                    label="batsmanAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanAballs"
                                    label="batsmanAballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="batsmanB"
                                    label="batsmanB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBruns"
                                    label="batsmanBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="batsmanBballs"
                                    label="batsmanBballs"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="runrate"
                                    label="runrate"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

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

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="target"
                                    label="target"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerA"
                                    label="bowlerA"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAruns"
                                    label="bowlerAruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAwickets"
                                    label="bowlerAwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerAover"
                                    label="bowlerAover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerB"
                                    label="bowlerB"
                                    type="text"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />

                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBruns"
                                    label="bowlerBruns"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />


                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBwickets"
                                    label="bowlerBwickets"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

                                    variant="outlined" />



                                <TextField
                                    id="outlined-basic"
                                    name="bowlerBover"
                                    label="bowlerBover"
                                    type="number"
                                    className="box"
                                    id="postbox"

                                    value={formik.values.caption}
                                    onChange={formik.handleChange}


                                    error={formik.touched.caption && Boolean(formik.errors.caption)}
                                    helperText={formik.touched.caption && formik.errors.caption}

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

export default Control;

