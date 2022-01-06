import React, { useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios';
import youtubeApi from '../api/youtube';

const InputUrl = (props: any) => {

    

    const submitUrl = async (keyword: any) => {
        
        //To do: Parse url passed from props to get the playlistId -

        const response = await youtubeApi.get("/list",{
            params: {
                q: keyword
            }
        })

        console.log(response);
    }

    // const [youtubeList, setYoutubeList] = useState<any[]>([]);
  
    // useEffect(() => {
    //   axios
    //     .get('https://youtube.googleapis.com/youtube/v3/playlistItems', {
    //       params: {
    //         part: 'contentDetails',
    //         playlistId: playlistId,
    //         key: key
    //       }
    //     })
    // }, [youtubeList]);

    return (
        <div className="input-section">
            <input className="url-input" placeholder="Enter Youtube URL here"/>
            <div>
                <button className="submit-btn" onClick={() => submitUrl("test")}>Submit</button>
            </div>
        </div>
    );
}

export default InputUrl;