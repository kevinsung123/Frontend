import * as React from 'react'

import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';

import 'grommet/grommet.min.css'

export default class PatientDetail extends React.Component {
    render() {
        return (
       
                <div id="diagnostic-info">
                    <Tabs>
                        <Tab title='DETAIL'>
                            <p>
                                First contents
                            </p>
                        </Tab>
                        <Tab title='CURRENT TASK'>
                            <p>
                                First contents
                            </p>
                        </Tab>
                        <Tab title='TASK RECOMMEND'>
                            <p>
                                First contents
                            </p>
                        </Tab>
                        <Tab title='IMSAFE HISTORY'>
                            <p>
                                First contents
                            </p>
                        </Tab>
                    </Tabs>
                </div>
           
        )
    }
}