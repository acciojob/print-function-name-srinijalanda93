function functionName()
	{
		alert(arguments.callee.name);
	}
function AccioJob()
	{
		alert(arguments.callee.name);
	}
functionName();
AccioJob();