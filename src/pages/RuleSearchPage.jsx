import * as React from 'react'
import { RuleSearchTable, RuleSearchList, RuleDetail } from '/components/Rules';


export class RuleSearchPage extends React.Component {
    render() {
        return (
            <div>
                <RuleSearchTable />
                <RuleSearchList />
            </div>
        )
    }
}