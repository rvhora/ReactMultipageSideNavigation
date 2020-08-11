import React, { Component } from 'react';
import {
  withStyles,
  Container,
  Grid,
  Paper,
  Button

} from '@material-ui/core';
import SideNavigation from './Sample2/SideNavigation'
import { COLORS } from './Sample2/Application_constants';
import "react-circular-progressbar/dist/styles.css";
import { Route, Switch } from 'react-router-dom'

import PersonalInformation from './pages/PersonalInformation';
import MedicalEducation from './pages/MedicalEducation'
import References from './pages/References'
import ReviewAndSign from './pages/ReviewAndSign'
import Internship from './pages/training/Internship'
import Residency from './pages/training/Residency'
import Fellowship from './pages/training/Fellowship'
import BoardCertifications from './pages/certifications/BoardCertifications'
import OtherCertifications from './pages/certifications/OtherCertifications'
import CertificationExams from './pages/certifications/CertificationExams'
import Licensure from './pages/certifications/Licensure'
import HospitalAffiliation from './pages/workhistory/HospitalAffiliation'
import PracticeExperience from './pages/workhistory/PracticeExperience'
import GapsInWorkHistory from './pages/workhistory/GapsInWorkHistory'
import MalpracticeClaimsHistory from './pages/malpracticeinsurance/MalpracticeClaimsHistory'
import MalpracticeCarriers from './pages/malpracticeinsurance/MalpracticeCarriers'
import DisciplinaryActionQuestions from './pages/attestationquestions/DisciplinaryActionQuestions'
import DisclosureQuestions from './pages/attestationquestions/DisclosureQuestions'
import menuNavigation from './Sample2/menuItems.json'
import menuListforNavigation from './Sample2/menuItemListForNavigation.json'
import NavigationButton from './Sample2/NavigationButton'
import { withRouter } from 'react-router-dom';


const styles = (theme) => ({
  root: {
    padding: '80px 0',
    minHeight: '800px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '60px',
      marginTop: '25px',
    },
    backgroundColor: COLORS.BLACK_HAZE,
  },
  sidebarRoot: {
    marginTop: '30px',
    padding: '30px 0',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contentRoot: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    minHeight: '800px',
  },
  sidePanelContainerRoot: {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',

  },
  mainPanelContainerRoot: {
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',

  },
  circularProgressHeader: {
    marginBottom: '10px',

    textAlign: 'center'
  },
  helpPanelLinks: {
    textAlign: 'left',
    marginBottom: '10px',
  },
  navigationButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-satrt',

  }, navigationButton: {
    marginTop: '10px',
    marginRight: '30px',
    width: '300px'

  },
  buttonBlock: {
    display: 'block'
  },
  buttonNone: {
    display: 'none'
  }

});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePath: '',

    }

  }



  componentDidMount() {
    //alert(JSON.stringify(menuNavigation.data[1]))
    const { pathname } = this.props.location;

    // alert(pathname)

  }

  render() {
    const { classes } = this.props;
    return (
      < div className={classes.root} >
        <Container maxWidth="xl">
          <Grid item xs={12}>
            <Grid container justify="space-evenly">
              <Grid item xs={12} md={4}>
                <Paper classes={{ root: classes.sidebarRoot }}>
                  <Grid container classes={{ root: classes.sidePanelContainerRoot }}>
                    <Grid item xs={12} classes={{ root: classes.circularProgressHeader }}>
                      Circular Progress

                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.helpPanelLinks }}>
                      <SideNavigation />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8}>
                <Paper classes={{ root: classes.contentRoot }}>
                  <Grid container classes={{ root: classes.mainPanelContainerRoot }}>
                    <Switch>
                      <Route exact path="/personalInformation" component={PersonalInformation}></Route>
                      <Route path="/medicalEducation" component={MedicalEducation}></Route>
                      <Route path="/references" component={References}></Route>
                      <Route path="/reviewAndSign" component={ReviewAndSign}></Route>

                      <Route path="/training/internship" component={Internship}></Route>
                      <Route path="/training/residency" component={Residency}></Route>
                      <Route path="/training/fellowship" component={Fellowship}></Route>

                      <Route path="/certifications/boardCertifications" component={BoardCertifications}></Route>
                      <Route path="/certifications/otherCertifications" component={OtherCertifications}></Route>
                      <Route path="/certifications/certificationExams" component={CertificationExams}></Route>
                      <Route path="/certifications/licensure" component={Licensure}></Route>

                      <Route path="/workhistory/hospitalAffiliation" component={HospitalAffiliation}></Route>
                      <Route path="/workhistory/practiceExperience" component={PracticeExperience}></Route>
                      <Route path="/workhistory/gapsinWorkHistory" component={GapsInWorkHistory}></Route>

                      <Route path="/malpracticeinsurance/malpracticeClaimsHistory" component={MalpracticeClaimsHistory}></Route>
                      <Route path="/malpracticeinsurance/malpracticeCarriers" component={MalpracticeCarriers}></Route>

                      <Route path="/attestationquestions/disciplinaryActionQuestions" component={DisciplinaryActionQuestions}></Route>
                      <Route path="/attestationquestions/disclosureQuestions" component={DisclosureQuestions}></Route>

                    </Switch>

                  </Grid>



                </Paper>
                <Grid item xs={12} md={12} classes={{ root: classes.navigationButtonWrapper }}>

                  <NavigationButton menuNavigation={menuListforNavigation.data} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Container>


      </div >
    );
  }
}

export default withRouter(withStyles(styles)(App));




