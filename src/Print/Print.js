import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './print.css'

export default class PrintComponent extends React.Component {

    // Printer resultatskjerm til PDF
    // Problem: Applikasjonen må lastes på nytt etter print
    printResultat = () => {
        const printElementer = document.getElementById('printId').innerHTML;
        const resultat = '<html><head><title></title></head><body>' + printElementer + '</body></html>'
        const tilbakeTilApp = document.body.innerHTML;
        document.body.innerHTML = resultat;
        window.print();
        document.body.innerHTML = tilbakeTilApp
    }

    render () {
        return (
            <div className='container'>
                <CustomButton onClick={() => this.printResultat()}>
                    Lagre som PDF
                </CustomButton>
            </div>
        )
    }
}