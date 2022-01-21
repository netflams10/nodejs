import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../actions/techActions'
import TechItem from './TechItem'

const TechListModal = ({ tech: { techs, loading },getTechs }) => {
    // const [techs, setTechs] = useState([])
    // const [loading, setLoading] = useState(false)

    // We have to call the getLogs in the useEffect
    useEffect (() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    // const getTechs = async () => {
    //     setLoading(true);

    //     const res = await fetch('/techs')
    //     const data = await res.json()

    //     setTechs(data);
    //     setLoading(false);
    // }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>

                <ul className="collection">
                    {!loading && techs !== null && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}

const mapToStateProps = state => ({
    tech: state.tech
})

export default connect( mapToStateProps, { getTechs })(TechListModal)
