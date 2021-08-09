import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pic from "../image/pic.jpg"
import { faChevronDown, faCreditCard, faHome, faSearch, faStar, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard").then((response) => {
      setData(response.data.data)
    })
  }, [])


  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebarContainerHeader}>
          <Image className="avatar" alt="" src={pic} width={30} height={30} />
          <style jsx global>{`
          .avatar {
            border-radius: 50%;
          }
        `}</style>
          <span className={styles.avatarHeading}>TermMonitor</span>
        </div>
        <div className={styles.sidebarContainerLinks}>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faHome} /><span className={styles.sidebarContainerLinkText}>Add Keywords</span></div>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faUsers} /><span className={styles.sidebarContainerLinkText}>Matches</span></div>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faCreditCard} /><span className={styles.sidebarContainerLinkText}>Manage Sources</span></div>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faCreditCard} /><span className={styles.sidebarContainerLinkText}>Integeration</span></div>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faCreditCard} /><span className={styles.sidebarContainerLinkText}>Alerts</span></div>
          <div className={styles.sidebarContainerLink}><FontAwesomeIcon icon={faStar} /><span className={styles.sidebarContainerLinkText}>Settings</span><FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "120px" }} /></div>
          <div className={styles.sidebarContainerLink}><span className={styles.sidebarContainerLinkText}>Billings</span></div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.header}>
          <h2 className={styles.headerText}>KEYWORDS</h2>
          <div className={styles.headerRight}>
            <input type="text"
              value="Submit →"
              className={styles.headerInput}
            />
            <div className={styles.headerImage}>A</div>
          </div>
        </div>
        <div className={styles.headerMiddleText}>
          <div className={styles.innerText}>
            <h3 className={styles.text}>Add Another Keyword</h3>
            <h3 className={styles.textNumber}>1/3</h3>
            <h3 className={styles.extraText}>UPGRADE</h3>
          </div>
          <div className={styles.searchText}>Advance Search</div>
        </div>
        <div className={styles.filter}>
          <div className={styles.filterInner}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} /><input className={styles.searchText} placeholder="Enter your filters here" type="text" />
          </div>
          <button className={styles.searchButton}>SAVE FILTERS</button>
        </div>
        <div className={styles.tableExtraText}>
          <h2 className={styles.tableText}>The terms you are tracking</h2>
          <p className={styles.tablePara}>The data will refresh every 5 min</p>
        </div>
        <div className={styles.table}>
          <section>
            <header>
              <div className={styles.col}>Keywords</div>
              <div className={styles.col}>Goal</div>
              <div className={styles.col}>Matches</div>
              <div className={styles.col}>Search Status</div>
              <div className={styles.col}>Delete Keyword</div>
            </header>
            <hr className={styles.tableBorder} />
            {
              data.map((tech) => {
                return (
                  <>
                    <div key={tech.id} className={styles.row}>
                      <div className={styles.col}>{tech.keyword} <FontAwesomeIcon icon={faSearch} className={styles.colIcon} /></div>
                      <div className={styles.col}>{tech.goal}</div>
                      <div className={styles.col}>{tech.matches}</div>
                      <div className={styles.col}>{tech.search_status}</div>
                      <div className={styles.col}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                    <hr className={styles.tableBorder} />
                  </>
                )
              })
            }
          </section>

        </div>
        <button className={styles.tableButton}>VIEW RESULTS</button>
      </div>
    </div>
  )
}
