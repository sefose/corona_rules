import React from 'react'
import Button from "react-bootstrap/Button";

const ImportButton = ({importCallback}) => {
    return (
        <Button onClick={importCallback} variant="secondary">importieren</Button>
    )
}

export default ImportButton
