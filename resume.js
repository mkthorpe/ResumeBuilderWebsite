function onSave(){
        if(validateFields()){
            submitted = true;
            document.forms[0].submit();

        }

        return false;
}
    }
