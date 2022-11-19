import React from 'react'
import './songlist.css'
// import {link} from 'react-router-dom'

const songs = [
  {
    no : 1,
    title : 'Nadha ninne kanan'
  },
  {
    no : 2,
    title : 'Yeshu ninne kanan'
  },
  {
    no : 3,
    title : 'Pithava anug kanan'
  },
  {
    no : 4,
    title : 'Nadha ninne kanan'
  },
  {
    no : 5,
    title : 'Maxhs sdf kanan'
  },
  {
    no : 6,
    title : 'Maxhs sdf kanan'
  },
  {
    no : 7,
    title : 'Kalvari ninne sdf'
  },
  {
    no : 8,
    title : 'Mazhapaduk ninne lali'
  },
  {
    no : 9,
    title : 'sarag sdf ff'
  },
  {
    no : 10,
    title : 'sjnf sfdjndn amtsdfj'
  },
  {
    no : 11,
    title : 'shf skdfn sfdns'
  },
  {
    no : 12,
    title : 'sdfn sdkfn skdfn'
  },
  {
    no : 13,
    title : 'sjdfb ninne kanan'
  },
  {
    no : 14,
    title : 'Nadha skjfn kanan'
  },
  {
    no : 15,
    title : 'ksdfn ninne kanan'
  },
]

function SongList() {
  return (
    <div className='songList-container'>
      <div className="songList">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Song</th>
            </tr>
          </thead>

          <tbody>
           {
            songs.map((i, val)=> {
              return(
                <tr key={val}>
                  <td>{i.no}</td>
                  <td>{i.title}</td>
                </tr>
              )
            })
           }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SongList