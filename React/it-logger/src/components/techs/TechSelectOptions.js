import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {

    useEffect(() => {
        getTechs()
        // eslint-disable-next-line
    }, []);

    console.log(techs)
    console.log(loading)
    return (
        !loading && techs !== null && <h1>hello</h1>
    )
}

TechSelectOptions.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired
}

const mapToStateProps = state => ({
    tech: state.tech
})

export default connect(mapToStateProps, { getTechs })(TechSelectOptions)
