import axios from "axios"

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch) => {
                let response = await axios.get('https://nd-mytinerary.herokuapp.com/api/itineraries/')
                let data = response.data.response
                dispatch({type: 'GET_ALL_ITINERARIES', payload: data})
                if (!response.data.success) {
                    throw new Error ('Ups! The server is down'),
                    console.log('Ups! The server is down')
                }
        }
    },

    getActivities: (id)=>{
        return async (dispatch, getState)=>{
            try{
                // console.log(itineraryId)
                let response = await axios.get(`https://nd-mytinerary.herokuapp.com/api/activities/${id}`)
                // console.log(response.data)
                if(response.data.success){
                    let data = response.data.response
                    console.log('la data')
                    console.log(data)
                    return({sucess:true, response:response.data.response})
                }else{
                    throw new Error('Backend-BD')

                }
            }catch(err){
                return{success:false, response:err.message}
            }
        }
    },

    addLike: (itId, token) => {
        return async (dispatch) => {
            try {
                let response = await axios.put(`https://nd-mytinerary.herokuapp.com/api/itinerary/likes/${itId}`,{} ,
                {
                    headers:{
                        Authorization: 'Bearer ' + token
                    }
                })
                if(response.data.success){
                    console.log(response.data.response)
                    return({success:true, response: response.data.response})
                } else {
                    console.log(response.data.response)
                    return({success: false})
                }

            } catch (error) {
                return({success:false, response:error.message})
            }
        }
    },

    addComment: (id, comment, token) => {
        return async () => {
            try {
                let response = await axios.put(`https://nd-mytinerary.herokuapp.com/api/itinerary/comments/${id}`, {comment, 
                headers:{
                    Authorization: 'Bearer ' +token
                }})
                return response
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions