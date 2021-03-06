/**
 * ownCloud - ocDownloader
 *
 * This file is licensed under the Creative Commons BY-SA License version 3 or
 * later. See the COPYING file.
 *
 * @author Xavier Beurois <www.sgc-univ.net>
 * @copyright Xavier Beurois 2015
 */
 
$(document).ready (function ()
{
	$('#ball').Badger ('...');
	$('#bcompletes').Badger ('...');
	$('#bactives').Badger ('...');
	$('#bwaitings').Badger ('...');
	$('#bstopped').Badger ('...');
	$('#bremoved').Badger ('...');
	
	OCDLR.Utils.UpdateQueue (true, 'all');
	
	OCDLR.Utils.GetCounters ();
});