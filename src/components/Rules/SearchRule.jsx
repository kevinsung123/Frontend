import React, {Component} from 'react';
import Table from "./RuleSearchTable";
import Form from "./RuleSearchForm";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import DeleteIcon from "material-ui/svg-icons/action/delete"
import orderBy from "lodash/orderBy";

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */

const invertDirection = {
    asc: "desc",
    desc: "asc"
  };

export default class SearchRule extends React.Component {

    state = {
        data: [
          {
            RuleName: "TUBE1",
            ServiceName: "가정간호",
            condition1: "환자구분=비위관",
            condition2: "영양=level2"
          },
          {
            RuleName: "TUBE2",
            ServiceName: "가정간호",
            condition1: "환자구분=위장루",
            condition2: "영양=level2"
          },
          {
            RuleName: "상처1",
            ServiceName: "가정간호",
            condition1: "환자구분=욕창",
            condition2: "기타=level2"
          },
          {
            RuleName: "PT개시1",
            ServiceName: "방문재활",
            condition1: "PT환자구분=CNS",
            condition2: "ADL<40",
            condition3: "신규여부=Y"
          },
          {
            RuleName: "PT개시2",
            ServiceName: "방문재활",
            condition1: "PT환자구분=CNS",
            condition2: "K-TIS<19",
            condition3: "신규여부=Y"
          },
          {
            RuleName: "PT지속1",
            ServiceName: "방문재활",
            condition1: "PT환자구분=CNS",
            condition2: "ADL<35",
            condition3: "신규여부=N",
            condition4: "K-TIS<16"
          },
          {
            RuleName: "PT지속2",
            ServiceName: "방문재활",
            condition1: "PT환자구분=CNS",
            condition2: "K-TIS<16",
            condition3: "신규여부=N",
            condition4: "MAS<15"
          },
          {
            RuleName: "상처2",
            ServiceName: "가정간호",
            condition1: "환자구분=일반상처",
            condition2: "기타=level2"
          },
          {
            RuleName: "TUBE3",
            ServiceName: "가정간호",
            condition1: "환자구분=정체 도뇨관",
            condition2: "배뇨 및 배변=level2"
          },
          {
            RuleName: "기타1",
            ServiceName: "가정간호",
            condition1: "활력증상=level2"
          },
          {
            RuleName: "기타2",
            ServiceName: "가정간호",
            condition1: "의식수준=level2"
          },
          {
            RuleName: "기타3",
            ServiceName: "가정간호",
            condition1: "영양=level2"
          },
          {
            RuleName: "PT종료1",
            ServiceName: "방문재활",
            condition1: "PT환자구분=CNS",
            condition2: "ADL>=35",
            condition3: "신규여부=N",
            condition4: "K-TIS>=16"
          },
          {
            RuleName: "입원대상1",
            ServiceName: "가정간호",
            condition1: "활력증상=level3"
          },
          {
            RuleName: "입원대상2",
            ServiceName: "가정간호",
            condition1: "의식수준=level3"
          }
        ],
        editIdx: -1,
        columnToSort: "",
        sortDirection: "desc",
        query: "",
    fixedHeader: true,
    fixedFooter: false,
    stripedRows: false,
    showRowHover: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: false,
    deselectOnClickaway: false,
    showCheckboxes: true,
    height: '300px',
    columnToQuery: 'RuleName',
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    const lowerCaseQuery = this.state.query.toLowerCase();
    return (
        <div className="SearchRule">
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", margin: "auto" }}>
              <TextField
                hintText="단어를 입력하세요"
                floatingLabelText="검색 창"
                value={this.state.query}
                onChange={e => this.setState({ query: e.target.value })}
                floatingLabelFixed
              />
              <SelectField
                style={{ marginLeft: "1em" }}
                floatingLabelText="검색할 항목"
                value={this.state.columnToQuery}
                onChange={(event, index, value) =>
                  this.setState({ columnToQuery: value })
                }
              >
                <MenuItem value="RuleName" primaryText="룰 이름" />
                <MenuItem value="ServiceName" primaryText="서비스 이름" />
                <MenuItem value="condition1" primaryText="조건1" />
                <MenuItem value="condition2" primaryText="조건2" />
                <MenuItem value="condition3" primaryText="조건3" />
                <MenuItem value="condition4" primaryText="조건4" />
              </SelectField>
            </div>
          </div>
          <Table
             fixedHeader={this.state.fixedHeader}
            selectable={this.state.selectable}
            multiSelectable={this.state.multiSelectable}
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.query
                ? this.state.data.filter(x =>
                    x[this.state.columnToQuery]
                      .toLowerCase()
                      .includes(lowerCaseQuery)
                  )
                : this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "룰 이름",
                prop: "RuleName"
              },
              {
                name: "서비스 이름",
                prop: "ServiceName"
              },
              {
                name: "조건1",
                prop: "condition1"
              },
              {
                name: "조건2",
                prop: "condition2"
              },
              {
                name: "조건3",
                prop: "condition3"
              },
              {
                name: "조건4",
                prop: "condition4"
              }
            ]}
          />
        </div>
    );
  }
}


/*
import * as React from 'react';
import { Table, TableBody, TalbeHeader, TableHeaderColumen, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import DatePicker from './DatePicker';
import DropMenu from './DropMenu';
import Paper from 'material-ui/Paper';

const style = {
    height: '100%',
    width: '100%',
    margin: 20,
    textAlign: 'center',

};

export default class RuleSearchTable extends React.Component {
    render() {
        return (
            <div className="RuleTable">
                <Paper style={style} zDepth={4} rounded={false} >
                    <Table>
                        <TableBody id ="TB">
                            <TableRow >
                                <TableRowColumn>기간</TableRowColumn>
                                <TableRowColumn><DatePicker /></TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>서비스명</TableRowColumn>
                                <TableRowColumn>가정간호</TableRowColumn>
                                <TableRowColumn>방문재활</TableRowColumn>
                                <TableRowColumn>치매예방</TableRowColumn>
                                <TableRowColumn>복약상담</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>환자정보</TableRowColumn>
                                <TableRowColumn><DropMenu /></TableRowColumn>
                                <TableRowColumn><TextField /></TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
*/
