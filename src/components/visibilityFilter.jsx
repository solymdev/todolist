import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import { Filters } from '../redux/actionTypes'
import Button from '@material-ui/core/Button'
import '../bootstrap.min.css'

function VisibilityFilter({ activeFilter, setFilter }) {
    return (
        <div class="text-center">{
        Filters.map((filter, i) => (
            <Button className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${i}`}>
                {filter}
            </Button>
        ))}
        </div>
    )
}

const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(mapState, { setFilter })(VisibilityFilter)