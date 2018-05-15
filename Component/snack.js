 // eslint-disable-next-line
import React from 'react';
import './snack.css';


/*class Bp extends React.Component{
	constructor(){
		super();
		this.state={
			name:[],
		}
	}

	cre=()=>{

		let a=[],uu=[];
		let sty={
			width:100/this.props.num+'%',
			height:100/this.props.num+'%'
		};
		console.log(sty);
		for(let i=0;i<this.props.num*this.props.num;i++)
		{
			if(i!=0)
				uu.push({num:'',key:0});
			else
				uu.push({num:'red',key:0});
			a.push(<div key={'u'+i} style={sty}  className={'ui'+' '+this.state.name[i].num}></div>);
		}
		return a;
	}

	render(){
		return (
				<div className="body">
					{this.cre()}
				</div>
			)
		
		
	}
}*/

class Ce extends React.Component {
	constructor(){
		super();
		this.state={
			name:0,
			sty:[],
			key:'red',
			snack:[0],
			pos:'down',
		}
	}
	cheshi=()=>{

	}

	creates=()=>{
		let a=[];
		let sty={
			width:100/this.props.num+'%',
			height:100/this.props.num+'%'
		};
		for(let i=0;i<this.props.num*this.props.num;i++)
		{
			
		}
		for(let i=0;i<this.props.num*this.props.num;i++)
		{
			if(this.state.name==0)
			{
				if(i!=0)
					this.state.sty[i]={num:'',key:0};
				else{
					this.state.sty[i]={num:'red',key:0};
				}
			}
			a.push(<div key={'u'+i} style={sty}  className={'ui'+' '+this.state.sty[i].num}></div>);
		}
		this.state.name+=1;
		return a;
	}

	move=(x)=>{
		let empty=x;
		let snack=this.state.snack,a=this.state.sty;
		if(this.state.pos=='up')
		{
			if(snack[0]-this.props.num>=0)
			{
				if(this.check(a[snack[0]-this.props.num]))
				{
					a[snack[0]-this.props.num].num='red';
					snack.unshift(snack[0]-this.props.num);
					for(let i=0;i<empty.length;i++)
					{
						if(empty[i]==snack[0])
						{
							empty.splice(i,1);
							break;
						}
					}
					if(a[snack[0]].key==0){
						a[snack[snack.length-1]].num='';
						empty.push(snack[snack.length-1]);
						snack.pop();
					}
					else{
						a[snack[0]].key=0;
						this.random1(empty);
					}
					this.state.sty=a;
					this.state.snack=snack;
					setTimeout(()=>{this.move(empty)}, this.props.speed);
				}
				
			}
			else
			{
				console.log('over');
			}
		}

		if(this.state.pos=='down')
		{
			if((snack[0]+this.props.num)/this.props.num<this.props.num)
			{
				if(this.check(a[snack[0]+this.props.num])){
					a[snack[0]+this.props.num].num='red';
					snack.unshift(snack[0]+this.props.num);
					for(let i=0;i<empty.length;i++)
					{
						if(empty[i]==snack[0])
						{
							empty.splice(i,1);
							break;
						}
					}
					if(a[snack[0]].key==0){
						a[snack[snack.length-1]].num='';
						empty.push(snack[snack.length-1]);
						snack.pop();
					}
					else{
						a[snack[0]].key=0;
						this.random1(empty);
					}
					
					this.state.sty=a;
					this.state.snack=snack;
					setTimeout(()=>{this.move(empty)}, this.props.speed);
				}
				
			}
			else
			{
				console.log('over');
			}
		}

		if(this.state.pos=='right')
		{
			if(Math.floor((snack[0]+1)/this.props.num)==Math.floor(snack[0]/this.props.num))
			{
				if(this.check(a[snack[0]+1])){
					a[snack[0]+1].num='red';
					snack.unshift(snack[0]+1);
					for(let i=0;i<empty.length;i++)
					{
						if(empty[i]==snack[0])
						{
							empty.splice(i,1);
							break;
						}
					}
					if(a[snack[0]].key==0){
						a[snack[snack.length-1]].num='';
						empty.push(snack[snack.length-1]);
						snack.pop();
					}
					else{
						a[snack[0]].key=0;
						this.random1(empty);
					}
					this.state.sty=a;
					this.state.snack=snack;
					setTimeout(()=>{this.move(empty)}, this.props.speed);
				}
				
			}
			else
			{
				console.log('over');
			}
		}

		if(this.state.pos=='left')
		{
			if(Math.floor((snack[0]-1)/this.props.num)==Math.floor(snack[0]/this.props.num))
			{
				if(this.check(a[snack[0]-1])){
					a[snack[0]-1].num='red';
					snack.unshift(snack[0]-1);
					for(let i=0;i<empty.length;i++)
					{
						if(empty[i]==snack[0])
						{
							empty.splice(i,1);
							break;
						}
					}
					if(a[snack[0]].key==0){
						a[snack[snack.length-1]].num='';
						empty.push(snack[snack.length-1]);
						snack.pop();
					}
					else{
						a[snack[0]].key=0;
						this.random1(empty);
					}
					
					this.state.sty=a;
					this.state.snack=snack;
					setTimeout(()=>{this.move(empty)}, this.props.speed);
				}
				
			}
			else
			{
				console.log('over');
			}
		}
		this.setState({
			sty:a
		})
	}

	check(x){
		if(x.num=='red'&&x.key!=1)
		{
			console.log('over');
			return false;
		}
		else return true;
	}

	ceshi(x){
		let a=[0,1,2,3,4,5];
		a.splice(x,1);
		console.log(a);
	}

	random1(x){
		let n=x.length-1;
		let num=Math.floor(Math.random()*n)
		this.state.sty[x[num]].num='green';
		this.state.sty[x[num]].key=1;
	}

	componentDidMount(){

        document.onkeydown = function(e){
        	let that=this;
        	if(e.keyCode==38&&this.state.pos!='down') this.state.pos='up';
        	if(e.keyCode==40&&this.state.pos!='up') this.state.pos='down';
        	if(e.keyCode==37&&this.state.pos!='right') this.state.pos='left';
        	if(e.keyCode==39&&this.state.pos!='left') this.state.pos='right';
        	if(e.keyCode==13) {
        		let empty=[];
        		for(let i=1;i<this.props.num*this.props.num;i++)
        		{
        			
        			empty.push(i);
        		}
        		this.random1(empty);
          		this.state.pos='down';
        		setTimeout(()=>{that.move(empty)},this.props.speed);
        	}
        }.bind(this);
		
     }


	render(){
		return(
			<div className='body'>
				{this.creates()}
				
			</div>
		)
	}
}

export default Ce;

