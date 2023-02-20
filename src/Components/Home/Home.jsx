import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from './Home.module.css';
const Home = () => {
  return (
    <div className="">
      <div className={styles.HomePageHero}>
      <h1>The Generics</h1>
      <h2 className="btn btn-">Get our Latest Album</h2>
     <h4> <FaPlayCircle /> </h4>
      </div>

      <h3 className={styles['tours']}>TOURS</h3>
      <div className="container text-center mt-5">
        <table className='table'>
          <tbody>
            <tr>
              <th scope="row">JUL 16</th>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
            </tr>
            <tr>
              <th scope="row">JUL 19</th>
              <td>TORONTO,ON</td>
              <td>BUDWEISER STAGE</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
           
            </tr>
            <tr>
              <th scope="row">JUL 22</th>
              <td>BRISTOW, VA</td>
              <td>JIGGY LUBE LIVE</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
            </tr>
            <tr>
              <th scope="row">JUL 29</th>
              <td>PHOENIX, AZ</td>
              <td>AK-CHIN PAVILION</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
            </tr>
            <tr>
              <th scope="row">AUG 2</th>
              <td>LAS VEGAS, NV</td>
              <td>T-MOBILE ARENA</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
            </tr>
            <tr>
              <th scope="row">AUG 7</th>
              <td>CONCORD, CA</td>
              <td>CONCORD PAVILION</td>
              <td className={styles['tableButton']}> <h5> BUY TICKETS </h5> </td>
    
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
