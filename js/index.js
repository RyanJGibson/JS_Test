class PushTest{

	constructor() {
        console.log('PushTest instantiated');


    };
    

    a3(){
        console.log('a3');
        let n = 4 + 8 + "9";
        console.log(n);
        console.log(typeof(n));
        let elA3Result = document.getElementById('a3Result');
        elA3Result.innerHTML = n + " " + typeof(n)
    }

    a5(){
        console.log('a5');

        //Create a new object using a constructor then assign a property 'nProp' with a value of 1
        let oObjecta = new Object();
        oObjecta.nProp = 1;

        //Create an object using an initialiser / literal notation and assign the same property as it's created
        let oObjectb = {
            nProp:1
        }

        //Properties can also be assigned using strings / brackets (useful for property keys with spaces)
        let oObjectc ={};
        oObjectc['nProp'] = 1;

        //Property keys can be identifiers, numbers or strings
        let oObjectd ={
            nProp1:1,
            2:2,
            'nProp 3': 3
        };

        //using assign it's also possible to clone and merge properties from other objects:
        let oObjecte = {nProp:1};
        let oObjectf = Object.assign({}, oObjecte);

        console.log(oObjecta);
        console.log(oObjectb);
        console.log(oObjectc);
        console.log(oObjectd);
        console.log(oObjectf);
    }


    //a6
    a6(){
        this.logMessage('Hello World');
    }

    logMessage(message) { //requires altering to the following to fix:  logMessage(message) {
        console.log(message);
    }


    //a7 filter..
    a7(){
        var res =[ "a", 2, { "C": 1 } ].filter(function (element) { return element = "a"});
        //outputs all elements...
        console.log(res);
    }

    a8(){
        var someNumbers = [ 1, 2, 3, 4, 5 ];
        var total = 0;
        for (var i = 0 ; i < someNumbers.length ;++i)
        {
            console.log(someNumbers[i] + " " + total);
            total += someNumbers[i];
        }
        console.log("Total : " + total);
    }

    a9(){
        var symbolMatrix = [
            [ 1,1,1 ],
            [ 2,2,2 ],
            [ 3,3,3 ],
            [ 4,4,4 ],
            [ 5,5,5 ] ];
        var targetSymbol = 3;
        var positions = [];
        for (var i = 0 ; i < symbolMatrix.length ; i++)
        {
            console.log(symbolMatrix[i]);
            for (var j = 0 ; j < symbolMatrix[i].length ; j++)
            {
                if (symbolMatrix[i][j] == targetSymbol) {
                    positions.push({x: i, y: j});
                }
            }
        }
        console.log("Positions : ");   
        console.log(positions);  

        let elA9Result = document.getElementById('a9Result');
        elA9Result.innerHTML = JSON.stringify(positions);

    }


    a10(){
        var symbolMatrix = [
            [ "A","A","A","A","A" ],
            [ "B","B","B","B","B" ],
            [ "C","C","C","C","C" ] ];
        symbolMatrix = this.invertMatrix(symbolMatrix);
        console.log(symbolMatrix);


        let elA10Result = document.getElementById('a10Result');
        elA10Result.innerHTML = JSON.stringify(symbolMatrix);

    }
    invertMatrix(aInputMatrix){
        let nInputMatrixLength = aInputMatrix.length;
        let nInputMatrixElementLength = aInputMatrix[0].length;

        let aOutputMatrix = [];

        for(let i=0;i<nInputMatrixElementLength;i++){
            let aInnerArray = [];
            for(let j=0;j<nInputMatrixLength;j++){
                aInnerArray.push(aInputMatrix[j][i]);
            }
            aOutputMatrix.push(aInnerArray);
        }

        console.log(aOutputMatrix);
        return aOutputMatrix;
    }



    a11(){
        var symbolMatrix = [
            [ "A","A","A","A","A" ],
            [ "B","B","B","B","B" ],
            [ "C","C","C","C","C" ] ];
        symbolMatrix = this.invertMatrix(symbolMatrix);

        var symbolMap = { "A":0,"B":1,"C":2 };
        var symbolMatrix = this.mapMatrix(symbolMatrix, symbolMap);

        console.log(symbolMatrix);
        let elA11Result = document.getElementById('a11Result');
        elA11Result.innerHTML = JSON.stringify(symbolMatrix);
    }
    mapMatrix(aInputMatrix, oMap){
        console.log('mapMatrix');
        
        let aOutputMatrix = [];

        for(let i=0;i<aInputMatrix.length;i++){
            let aInnerArray = aInputMatrix[i];
            let aNewInnerArray = aInnerArray.map(mapFunc);
            console.log(aNewInnerArray);
            aOutputMatrix.push(aNewInnerArray);
        }
        
        function mapFunc(sEl) {
            //console.log(sEl);
            //console.log(oMap[sEl]);
            return oMap[sEl];
        }

        return aOutputMatrix;
    }

    a12(){
        var symbolMatrix = [
            [ "A","A","A","A","A" ],
            [ "B","B","B","B","B" ],
            [ "C","C","C","C","C" ] ];
        symbolMatrix = this.invertMatrix(symbolMatrix);

        var symbolMap = { "A":0,"B":1,"C":2};
        var symbolMatrix = this.mapMatrix(symbolMatrix, symbolMap);

        let oCounts = this.countMatrixMatchingValues(symbolMatrix);

        let elA12Result = document.getElementById('a12Result');
        elA12Result.innerHTML = JSON.stringify(oCounts);
    }

    countMatrixMatchingValues(aInputMatrix){
        console.log('countMatrixMatchingValues');
        let oOutput = {};
        for(let i=0;i<aInputMatrix.length;i++){
            let aInnerArray = aInputMatrix[i]
            for(let j=0;j<aInnerArray.length;j++){
                let el = aInnerArray[j];
                console.log(el);
                if(!oOutput[el]){
                    oOutput[el]=1;
                }else{
                    oOutput[el]++;
                }
            }
        }

        console.log(oOutput); //{0: 5, 1: 5, 2: 5}
 
        return oOutput;
    }


    generateRandomMatrix(nX,nY,aElements){
        let aInputSymbols = aElements;
        let aRandomMatrix = [];
        for(let i=0;i<nY;i++){
            let aInnerArray =[];
            for(let j=0;j<nX;j++){
                let sRanElPos = parseInt(Math.random()*aInputSymbols.length);
                aInnerArray.push(aInputSymbols[sRanElPos]);
            }
            aRandomMatrix.push(aInnerArray);
        }

        console.log('aRandomMatrix:');
        console.log(aRandomMatrix);
        return aRandomMatrix;
    }

    a13(){
        //randomise our original symbol matrix

        let symbolMatrix = [];
        symbolMatrix= this.generateRandomMatrix(5,3,["A","B","C"]);

        let elA13ResultInput = document.getElementById('a13ResultInput');
        elA13ResultInput.innerHTML = JSON.stringify(symbolMatrix);

        //then invert it, map it and count the contents...
        
        symbolMatrix = this.invertMatrix(symbolMatrix);
        let elA13ResultOutput1 = document.getElementById('a13ResultOutput1');
        elA13ResultOutput1.innerHTML = JSON.stringify(symbolMatrix);

        var symbolMap = { "A":0,"B":1,"C":2};
        symbolMatrix = this.mapMatrix(symbolMatrix, symbolMap);

        let elA13ResultOutput2 = document.getElementById('a13ResultOutput2');
        elA13ResultOutput2.innerHTML = JSON.stringify(symbolMatrix);

        let oCounts = this.countMatrixMatchingValues(symbolMatrix);

        let elA13ResultOutput3 = document.getElementById('a13ResultOutput3');
        elA13ResultOutput3.innerHTML = JSON.stringify(oCounts);
    }


    a14(){
        let oDesiredInput = '{"grid":[["L1","L1","L1","L1"],["L1","L1","L4","L4"],["L1","L1","L4","L4"],["L3","H1","H1","L2"],["H1","H1","H1","L4"]],"winningLines":[{"lineIndex":0,"symbol":"L1","matchCount":3,"line":[0,0,0,0,0],"win":4},{"lineIndex":1,"symbol":"L1","matchCount":3,"line":[1,1,1,1,1],"win":4},{"lineIndex":4,"symbol":"L1","matchCount":3,"line":[0,1,0,1,0],"win":4},{"lineIndex":7,"symbol":"L1","matchCount":3,"line":[1,0,1,0,1],"win":4},{"lineIndex":10,"symbol":"L1","matchCount":3,"line":[0,0,1,2,2],"win":4},{"lineIndex":14,"symbol":"L1","matchCount":3,"line":[1,0,0,0,1],"win":4},{"lineIndex":15,"symbol":"L1","matchCount":3,"line":[2,1,1,1,2],"win":4},{"lineIndex":17,"symbol":"L1","matchCount":3,"line":[0,1,1,1,0],"win":4}]}';
        console.log('DESIRED INPUT>');
        console.log(JSON.parse(oDesiredInput));
        let oDesiredOutput = '{"symbolMatrix":[[5,5,5,5],[5,5,8,8],[5,5,8,8],[7,1,1,6],[1,1,1,8]],"lineWins":[{"id":0,"win":4,"symbol":5,"symbolCount":3,"definition":[0,0,0,0,0],"lineSymbols":[5,5,5,-1,-1]},{"id":1,"win":4,"symbol":5,"symbolCount":3,"definition":[1,1,1,1,1],"lineSymbols":[5,5,5,-1,-1]},{"id":4,"win":4,"symbol":5,"symbolCount":3,"definition":[0,1,0,1,0],"lineSymbols":[5,5,5,-1,-1]},{"id":7,"win":4,"symbol":5,"symbolCount":3,"definition":[1,0,1,0,1],"lineSymbols":[5,5,5,-1,-1]},{"id":10,"win":4,"symbol":5,"symbolCount":3,"definition":[0,0,1,2,2],"lineWinSymbols":[5,5,5,-1,-1],"lineSymbols":[5,5,5,-1,-1]},{"id":14,"win":4,"symbol":5,"symbolCount":3,"definition":[1,0,0,0,1],"lineSymbols":[5,5,5,-1,-1]},{"id":15,"win":4,"symbol":5,"symbolCount":3,"definition":[2,1,1,1,2],"lineSymbols":[5,5,5,-1,-1]},{"id":17,"win":4,"symbol":5,"symbolCount":3,"definition":[0,1,1,1,0],"lineSymbols":[5,5,5,-1,-1]}]}';
        console.log('DESIRED OUTPUT>');
        console.log(JSON.parse(oDesiredOutput));

        let oOutput = this.parseData(JSON.parse(oDesiredInput));
        console.log(oOutput);

        let elA14ResultOutput1 = document.getElementById('a14ResultOutput1');
        elA14ResultOutput1.innerHTML = oDesiredInput;

        let elA14ResultOutput2 = document.getElementById('a14ResultOutput2');
        elA14ResultOutput2.innerHTML = JSON.stringify(oOutput);   
    }


    parseData(oInputJSON){
        console.log('parseData');
        //console.log(oInputJSON);

        let oOutput = {};

        //create symbolMatrix based on grid data:
        console.log(oInputJSON.grid);
        let oSymbolMap = { "L1":5,"L2":6,"L3":7,"L4":8,"H1":1};
        oOutput.symbolMatrix=this.mapMatrix(oInputJSON.grid,oSymbolMap);
        console.log('oOutput');
        console.log(oOutput);

        //Then create lineWins based on winningLines data:
        oOutput.lineWins=[];
        for(let i=0;i<oInputJSON.winningLines.length;i++){
            let oWinningLine = oInputJSON.winningLines[i];
            console.log('oWinningLine (input)');
            console.log(oWinningLine);

            let oLineWin ={};
            oLineWin.id = oWinningLine.lineIndex;
            oLineWin.win = oWinningLine.win;
            oLineWin.symbol = oSymbolMap[oWinningLine.symbol];
            oLineWin.symbolCount = oWinningLine.matchCount;
            oLineWin.definition = oWinningLine.line;
            
            oLineWin.lineSymbols = [];
            for(let j=0;j<oLineWin.definition.length;j++){
                if(j<oLineWin.symbolCount){
                    oLineWin.lineSymbols.push(oLineWin.symbol);
                }else{
                    oLineWin.lineSymbols.push(-1);
                }
            }

            //console.log('oLineWin (output)');
            //console.log(oLineWin);
            oOutput.lineWins.push(oLineWin);
        }

        return oOutput;
    }



}


var oPushTest = new PushTest();

oPushTest.a3();
oPushTest.a5();
oPushTest.a6();
oPushTest.a7();
oPushTest.a8();
oPushTest.a9();
oPushTest.a10();
oPushTest.a11();
oPushTest.a12();
oPushTest.a13();
oPushTest.a14();