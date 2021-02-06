import PropTypes from 'prop-types'
import Button from './Button.js'


// () -> (props) -> {{ title }} {{}} - this de-structures the props
const Header = ({ title, title1,onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('click')
    // }
    
    return (
        <header className='header'>
            {/* Task Tracker -> props.title -> {title} */}
            {/* <h1 style={{ color: 'red', backgroundColor: 'blue'}}>{title}</h1> */}
            <h1>{title}</h1>
            {/* passing Onclick as a prop as it wont always be the same */}
            <Button     
                color ={showAdd ? '#840032': '#ED6B86'} 
                text= {showAdd ? 'Close' : 'Add'} 
                onClick={onAdd}
            />
        </header>
    )
}


Header.defaultProps ={
    title: 'Get Your Shit Done',
    // title1: 'Get Your Shit Done'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    // title1: PropTypes.string.isRequired
}


export default Header
