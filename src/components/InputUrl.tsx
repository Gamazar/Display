import React, { useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios';

interface IurlInputProp {
    updateName: (arg: string) => void
}

const InputUrl: React.FC<string> = (prop: string) => {

    const key: String = "AIzaSyBdDG3avX6w2OCx4NKOjyeSZ8Aw2tnuc9I";
    const playlistId = 10;
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
            <input className="url-input" placeholder="Enter URL here"/>
            <div>
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    );
}

export default InputUrl;